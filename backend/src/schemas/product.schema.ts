import { z } from "zod"

export const getProductSchema = z.object({
    limit: z.string().optional().transform((val) => (val ? parseInt(val) : 20)).refine((val) => val >= 1 && val <= 100, {
        message: "limit must be between 1 and 100"
    }),

    cursor: z.string().optional(),
    category: z.string().optional(),

})