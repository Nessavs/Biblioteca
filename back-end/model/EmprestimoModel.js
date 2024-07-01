import { Sequelize } from "sequelize";
import banco from "../banco.js";

export default banco.define("emprestimo",
    {
        idemprestimo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        idlivro: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idpessoa: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        emprestimo: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        vencimento: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        devolucao: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    }
);