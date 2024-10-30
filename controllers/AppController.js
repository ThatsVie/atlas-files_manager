import redisClient from '../utils/redis.js';
import dbClient from '../utils/db.js';

class AppController {
    static getStatus(req, res) {
        res.status(200).json({
            redis: redisClient.isAlive(),
            db: dbClient.isAlive(),
        });
    }

    static async getStats(req, res) {
        const usersCount = await dbClient.nbUsers();
        const filesCount = await dbClient.nbFiles();
        res.status(200).json({ users: usersCount, files: filesCount });
    }
}

export default AppController;
