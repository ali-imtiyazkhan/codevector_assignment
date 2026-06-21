export type Cursor = {
    createdAt: string;
    id: string;
}

export function encodeCursor(createdAt: Date, id: string): string {
    const payload = JSON.stringify({ createdAt: createdAt.toISOString(), id });

    return Buffer.from(payload).toString("base64")
}

export function decodeCursor(cursor: string): Cursor {
    const payload = Buffer.from(cursor, "base64").toString("utf-8");
    return JSON.parse(payload) as Cursor;
}