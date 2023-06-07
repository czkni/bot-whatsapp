const mysql = require('mysql2/promise');
const { create } = require('venom-bot');

const createConnection = async ()=> {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'insert_user',
        password: 'insert_password',
        database: 'insert_database'
    });
}
const getReply = async (keyword) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT resposta from chatbot where pergunta = ?', [keyword]);
    if (rows.length > 0) return rows[0].resposta;
    return false;
}
const setUser = async (msgfrom) => {
    try {
    const connection = await createConnection();
    const [rows] = await connection.execute('INSERT INTO `status`(`id`,`status`,`usuario`) VALUES (NULL, "on", ?)', [msgfrom]);
    if(rows.length > 0) return rows[0].usuario;
    return false;
    } catch (error){
        console.log(error);
    }
}
const deleteUser = async (msgfrom) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('delete from status where usuario = ?', [msgfrom]);
    if(rows.length > 0) return rows[0].response;
    return false;
}