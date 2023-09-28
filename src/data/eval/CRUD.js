/*
Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

Description: 
this file recover a fs file and returns its content
*/

import fs from "fs/promises"
import path from "path"

export const EvaluateFile = async (name) => {

    const filePath = path.join(process.cwd(), "private/eval", name)

    try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        return fileContent;
    } catch (err) {
        throw("Error reading file: ", name);
    }
}