// ReadState.cs
//
// This code was automatically generated from
// ECMA CLI XML Library Specification.
// Generator: libgen.xsl [1.0; (C) Sergey Chaban (serge@wildwestsoftware.com)]
// Created: Wed, 5 Sep 2001 06:31:27 UTC
// Source file: AllTypes.xml
// URL: http://msdn.microsoft.com/net/ecma/AllTypes.xml
//
// (C) 2001 Ximian, Inc.  http://www.ximian.com
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
import { markEnum } from "./type";
/**
 */
export var ReadState;
(function (ReadState) {
    /**
     */
    ReadState[ReadState["Initial"] = 0] = "Initial";
    /**
     */
    ReadState[ReadState["Interactive"] = 1] = "Interactive";
    /**
     */
    ReadState[ReadState["Error"] = 2] = "Error";
    /**
     */
    ReadState[ReadState["EndOfFile"] = 3] = "EndOfFile";
    /**
     */
    ReadState[ReadState["Closed"] = 4] = "Closed";
})(ReadState || (ReadState = {}));
/**
 * @hidden
 */
export var ReadState_$type = markEnum('ReadState', 'Initial,0|Interactive,1|Error,2|EndOfFile,3|Closed,4');
//# sourceMappingURL=ReadState.js.map