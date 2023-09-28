/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

*/

/**
 * Description
 * A module that provides functions for reading and writing files.
 */


/**
 * Reads all files in the "private" directory.
 * @returns {Promise<Array<string>>} An array of file names in the "private" directory.
 * @throws {Error} If there is an error reading the file.
 */

import fs from "fs/promises"
import path from "path"
export const ReadAllFiles = async () => {

    const filePath = path.join(process.cwd(), "private")

    try {
        const files = await fs.readdir(filePath);
        return files;
    } catch (err) {
        console.error("Error reading the file:", err);
        throw err;
    }
}

/**
 * Reads the content of a file given its name.
 * @param {string} name - The name of the file to be read.
 * @returns {Promise<string>} The content of the file specified by the given name.
 * @throws {string} If the file or directory does not exist.
 */    

export const ReadFileByName = async (name) => {

    const filePath = path.join(process.cwd(), "private", name)
    try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        return fileContent;
    } catch (err) {
        throw("ERROR, no such file or directory");
    }
}

export const WriteFileByName = async (name, content) => {

    let message = ""

    const filePath = path.join(process.cwd(), "private", name)

    try {
        fs.access(filePath, fs.constants.F_OK)
            .then(() => {
                message = " Existed File, Successfully overwrited"
            })
            .catch((err) => {
                message = " Successfully Saved"
            })

        await fs.writeFile(filePath, content, "utf-8")
        return message;
    } catch (err) {
        return("Error writting at: ", err);
    }
}