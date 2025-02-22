import sql from '../database/db_connection.js'
import { userSchema } from '../schemas/users.js';
import bcrypt from 'bcrypt';

export default function userRoutes(app) {
    app.post('/', async (req, res) => {
        const body = req.body;
        const { name, email, password } = userSchema.parse(body);

        const passwordHash = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${passwordHash})
        `;
        res.status(201).send('User created');
    })

    app.get('/', async (req, res) => {
        const users = await sql`
            SELECT * FROM users
        `;
        res.send(users);
    })

    app.get('/:id', async (req, res) => {
        const id = req.params.id;
        const user = await sql`
            SELECT * FROM users
            WHERE id = ${id}
        `;
        res.send(user);
    })

    app.put('/:id', async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const { name, email, password } = userSchema.parse(body);
        
        const user = {
            name,
            email,
            password: await bcrypt.hash(password, 10)
        }
        await sql`
            UPDATE users SET name = ${user.name}, email = ${user.email}, password = ${user.password}
            WHERE id = ${id}
        `;
        res.status(204).send();
    })


    app.delete('/:id', async (req, res) => {
        const id = req.params.id;
        await sql`
            DELETE FROM users
            WHERE id = ${id}
        `;
        res.status(204).send();
    })
}