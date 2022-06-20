const connection = require("../config");
const db = connection.promise();

const findByTitle = (title) => {
    return db
        .query("SELECT * FROM album WHERE title = ?", [title])
        .then(([results]) => results[0]);
}

const findAll = () => {
    return db
        .query("SELECT * FROM album")
        .then(([results]) => results);
}

const findById = (id) => {
    return db
        .query("SELECT * FROM album WHERE id = ?", [id])
        .then(([results]) => results[0]);
}

const createAlbum = ({ title, genre, picture, artist }) => {
    return db
        .query("INSERT INTO album SET ?", {
            title,
            genre,
            picture,
            artist
        }).then(([result]) => {
            const id = result.insertId;
            return { title, genre, picture, artist, id };
        });
}

module.exports = {
    findByTitle,
    createAlbum,
    findAll,
    findById
};