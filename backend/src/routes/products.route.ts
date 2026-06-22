import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import prisma from "../lib/prisma";

import { encodeCursor, decodeCursor } from "../lib/cursor";

import { getProductSchema } from "../schemas/product.schema";

const products = new Hono()

products.get("/", zValidator('query', getProductSchema), async (c) => {
    const { limit, cursor, category } = c.req.valid('query')

    // decode cursor id exist
    let cursorCondition = {}

    if (cursor) {
        const decode = decodeCursor(cursor)

        cursorCondition = {
            OR: [
                {
                    createdAt: { lt: new Date(decode.createdAt) },
                },
                {
                    createdAt: {
                        equals: new Date(decode.createdAt)
                    },
                    id: {
                        lt: decode.id
                    }
                }
            ]
        }
    }

    const where = {
        ...(category ? { category } : {}),
        ...cursorCondition
    };

    const rows = await prisma.product.findMany({
        where,
        orderBy: [{
            createdAt: "desc"
        },
        {
            id: "desc"
        }],
        take: limit + 1
    });


    const hasMore = rows.length > limit

    const data = hasMore ? rows.slice(0, limit) : rows

    const lastRow = data[data.length - 1];

    const nextCursor = hasMore && lastRow ? encodeCursor(lastRow.createdAt, lastRow.id) : null;

    return c.json({
        data,
        nextCursor,
        hasMore
    });

});

export default products

