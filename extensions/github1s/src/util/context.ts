/**
 * @file extension context
 * @author netcon
 */

import * as vscode from 'vscode';

let extensionContext: vscode.ExtensionContext | null = null;

export const setExtensionContext = (_extensionContext: vscode.ExtensionContext) => {
	extensionContext = _extensionContext;
};

export const getExtensionContext = (): vscode.ExtensionContext | null => {
	return extensionContext;
};
