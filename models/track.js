const connection = require("../config");
const db = connection.promise();

const findByTitle = (title) => {
    return db
        .query("SELECT * FROM track WHERE title = ?", [title])
        .then(([results]) => results[0]);
}

const createTrack = ({ title, youtube_url, album_id }) => {
    return db
        .query("INSERT INTO track SET ?", {
            title,
            youtube_url,
            album_id
        }).then(([result]) => {
            const id = result.insertId;
            return { title, youtube_url, album_id, id };
        });
}

const findTracks = (albumId) => {
    let sql = "SELECT * FROM track"
    let sqlValues = []
    console.log("albumId", albumId);
    if (albumId !== undefined) {
        sql += " JOIN album ON album_id = album.id WHERE album_id = ?"
        sqlValues = [albumId]
    }
    return db
        .query(sql, sqlValues)
        .then(([result]) => result)

}


module.exports = {
    findByTitle,
    createTrack,
    findTracks
};