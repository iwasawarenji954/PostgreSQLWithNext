import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const result = await db.query('SELECT NOW()');
        return NextResponse.json({ time: result.rows[0] });
    } catch (error) {
        console.error('Database connection error:', error);
        return NextResponse.json({ error: 'Failed to connect to the database' }, { status: 500 });
    }
}
