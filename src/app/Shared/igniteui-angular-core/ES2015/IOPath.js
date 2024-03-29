//------------------------------------------------------------------------------
// 
// System.IO.Path.cs 
//
// Copyright (C) 2001 Moonlight Enterprises, All Rights Reserved
// Copyright (C) 2002 Ximian, Inc. (http://www.ximian.com)
// Copyright (C) 2003 Ben Maurer
// 
// Author:         Jim Richardson, develop@wtfo-guru.com
//                 Dan Lewis (dihlewis@yahoo.co.uk)
//                 Gonzalo Paniagua Javier (gonzalo@ximian.com)
//                 Ben Maurer (bmaurer@users.sourceforge.net)
//                 Sebastien Pouliot  <sebastien@ximian.com>
// Created:        Saturday, August 11, 2001 
//
//------------------------------------------------------------------------------
//
// Copyright (C) 2004-2005 Novell, Inc (http://www.novell.com)
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { Base, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { stringEmpty, stringStartsWith } from "./string";
import { lastIndexOfAny } from "./stringExtended";
/**
 * @hidden
 */
export class IOPath extends Base {
    static getExtension(a) {
        let b = a.lastIndexOf('.');
        if (b < 0) {
            return stringEmpty();
        }
        return a.substr(b);
    }
    static getDirectoryName(a) {
        let b = lastIndexOfAny(a, ['\\', '/']);
        if (b < 0) {
            return stringEmpty();
        }
        return a.substr(0, b);
    }
    static getFileName(a) {
        let b = lastIndexOfAny(a, ['\\', '/']);
        if (b < 0) {
            return a;
        }
        return a.substr(b + 1);
    }
    static combine1(a, b) {
        if (a == null || a.length == 0) {
            return b;
        }
        if (b == null || b.length == 0) {
            return a;
        }
        if (a.charAt(a.length - 1) == '\\' || a.charAt(a.length - 1) == '/' || b.charAt(0) == '\\' || b.charAt(0) == '/') {
            return a + b;
        }
        return a + '\\' + b;
    }
    static isPathRooted(a) {
        if (a == null) {
            return false;
        }
        if (a.length >= 1 && (a.charAt(0) == '/' || a.charAt(0) == '\\')) {
            return true;
        }
        if (a.length >= 2 && a.charAt(1) == ':') {
            return true;
        }
        return false;
    }
    static changeExtension(a, b) {
        throw new NotImplementedException(0);
    }
    static combine(...a) {
        throw new NotImplementedException(0);
    }
    static combine2(a, b, c) {
        throw new NotImplementedException(0);
    }
    static getFileNameWithoutExtension(a) {
        throw new NotImplementedException(0);
    }
    static getFullPath(a) {
        throw new NotImplementedException(0);
    }
    static getInvalidPathChars() {
        throw new NotImplementedException(0);
    }
    static getPathRoot(a) {
        if (a == null) {
            return null;
        }
        let b = a.trim();
        if (b.length > 0) {
            let c = b.match(IOPath.h);
            if (c != null) {
                return c[1] + (c[2] == null ? ":" : ":\\");
            }
            else {
                let d = b.match(IOPath.i);
                if (d != null) {
                    let e = d[1].toString().trim();
                    if (e.length == 1 || stringStartsWith(e, "\\ ") || stringStartsWith(e, "/ ")) {
                        return "\\";
                    }
                    if (d[2] == null) {
                        return "\\\\";
                    }
                    else if (d[3] == null) {
                        return "\\\\" + d[2];
                    }
                    else {
                        return "\\\\" + d[2] + "\\" + d[3];
                    }
                }
            }
        }
        return stringEmpty();
    }
    static getTempFileName() {
        throw new NotImplementedException(0);
    }
    static getTempPath() {
        throw new NotImplementedException(0);
    }
    static hasExtension(a) {
        throw new NotImplementedException(0);
    }
}
IOPath.$t = markType(IOPath, 'IOPath');
IOPath.altDirectorySeparatorChar = '/';
IOPath.directorySeparatorChar = '\\';
IOPath.pathSeparator = ';';
IOPath.volumeSeparatorChar = ':';
IOPath.h = (/^\s*(\w)\s*:\s*([\\\/])?/);
IOPath.i = (/^((?:\s*[\\\/]+)+)((?:\s|[^\\\/])+)?(?:(?:\s*[\\\/]+)+((?:\s*|[^\\\/])*))?/);
//# sourceMappingURL=IOPath.js.map