/** Arquivo que cotém o método para excluir avatar/foto antiga do usuario */

import fs from "fs";

/** stat- função verifica se um arquivo existe, na diretorio que passamos
 * colocamos ele dentro de um try-catch
 * porque se o arquivo que passar pra ele der como n encontrado
 * ele da um erro, ai então cai no try-catch
 */
export const deleteFile = async (filename: string) => {
  /*
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  } */

  /** unlink - método responsavel por remover o nosso arquivo/avatar antigo */
  await fs.promises.unlink(filename);
};
