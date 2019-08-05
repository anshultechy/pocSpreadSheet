// -*- Mode: C; tab-width: 8; indent-tabs-mode: t; c-basic-offset: 8 -*-
//
// System.Xml.WriteState
//
// Author:
//   Daniel Weber (daniel-weber@austin.rr.com)
//
// (C) 2001 Daniel Weber
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
export var WriteState;
(function (WriteState) {
    /**
     * A write method has not been called.
     */
    WriteState[WriteState["Start"] = 0] = "Start";
    /**
     * The prolog is being written.
     */
    WriteState[WriteState["Prolog"] = 1] = "Prolog";
    /**
     * An element start tag is being written.
     */
    WriteState[WriteState["Element"] = 2] = "Element";
    /**
     * An attribute is being written.
     */
    WriteState[WriteState["Attribute"] = 3] = "Attribute";
    /**
     * Element content is being written.
     */
    WriteState[WriteState["Content"] = 4] = "Content";
    /**
     * The close method has been called.
     */
    WriteState[WriteState["Closed"] = 5] = "Closed";
})(WriteState || (WriteState = {}));
/**
 * @hidden
 */
export let WriteState_$type = markEnum('WriteState', 'Start,0|Prolog,1|Element,2|Attribute,3|Content,4|Closed,5');
//# sourceMappingURL=WriteState.js.map