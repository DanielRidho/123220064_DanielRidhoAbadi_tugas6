import { Sequelize} from "sequelize";
import db from "../config/database.js";

const{DataTypes} = Sequelize;

//tabel notes dimana ada isi berupa nama, judul, dan isi notesnya
const Note = db.define('notes', {
    nama: DataTypes.STRING,
    judul: DataTypes.STRING,
    isi: DataTypes.STRING
},{
    freezeTableName:true
});

export default Note;

(async()=>{
    await db.sync();
})();