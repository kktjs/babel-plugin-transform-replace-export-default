import { PluginObj, PluginPass } from '@babel/core';

export type Options = {
  removeExportDefault?: boolean;
}

export default function defaultExportReplace(): PluginObj<PluginPass> {
  return {
    name: 'transform-replace-export-default',
    visitor: {
      ExportDefaultDeclaration(path, state) {
        const declaration = path.node.declaration;
        const { removeExportDefault } = state.opts as Options;
        if (removeExportDefault) {
          declaration.type === 'Identifier' ? path.remove() : path.replaceWith(declaration);
          return;
        }

        if (declaration.type === 'ClassDeclaration' || declaration.type === 'FunctionDeclaration') {
          // @ts-ignore
          path.node.type = 'ReturnStatement';
          // @ts-ignore
          path.node.argument = declaration;
          path.replaceWith(path.node);
        } else if (declaration.type === 'Identifier') {
          // declaration.name = `return ${declaration.name}`;
          // @ts-ignore
          path.node.type = 'ReturnStatement';
          // @ts-ignore
          path.node.argument = declaration;
          path.replaceWith(path.node);
        }
      },
    },
  };
}