/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { getEnumerator, getEnumeratorObject, Base, Array_$type } from "./type";
export function arrayCopyTo(source, dest, index) {
    for (var i = 0; i < source.length; i++) {
        dest[index++] = source[i];
    }
}
export function arrayCopy(source, sourceIndex, dest, destIndex, count) {
    for (var i = 0; i < count; i++) {
        dest[destIndex + i] = source[sourceIndex + i];
    }
}
export function arrayInsert(target, index, item) {
    target.splice(index, 0, item);
}
export function arrayRemoveAt(target, index) {
    target.splice(index, 1);
}
export function arrayRemoveItem(target, item) {
    var index = target.indexOf(item);
    if (index >= 0) {
        target.splice(index, 1);
        return true;
    }
    return false;
}
export function arrayGetValue(target, index) {
    return target[index];
}
export function arrayGetLength(target, dimension) {
    // TODO: Is there a better way to do this? Maybe attach the rank values to the array?
    var array = target;
    var dim = dimension;
    while (array) {
        if (dim === 0) {
            return array.length;
        }
        dim--;
        array = array[0];
    }
    return -1;
}
export function arrayGetRank(target) {
    return 1;
}
export function arrayResize(target, length) {
    target.length = 0;
}
export function arrayInsertRange(target, index, items) {
    var i = 0;
    if (target.length === 0) {
        for (i = 0; i < items.length; i++) {
            target[index++] = items[i];
        }
    }
    else {
        for (i = 0; i < items.length; i++) {
            target.splice(index++, 0, items[i]);
        }
    }
}
export function arrayInsertRange1(target, index, items) {
    //TODO: adjust this later, but this is the safest change to make right now.
    var i = 0;
    if (target.length === 0) {
        for (i = 0; i < items.length; i++) {
            target[index++] = items[i];
        }
    }
    else {
        for (i = 0; i < items.length; i++) {
            target.splice(index++, 0, items[i]);
        }
    }
}
export function arrayShallowClone(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}
export function arrayClear(arr) {
    arr.length = 0;
}
//   export function listItem(list: any, index: number, item?: any): void {
//       if ((<any>list).$type === undefined) {
//           let arr = <any[]>list;
//           if (item !== undefined) {
//               arr[index] = item;
//               return item;
//           } else {
//               return arr[index];
//           }
//       }
//       if (item !== undefined) {
//           list.item(index, item);
//           return item;
//       }
//       return list.item(index);
//   }
//export function  listAdd(list: any, item: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayInsert(arr, arr.length, item);
//					return;
//			}
//			list.add(item);
//	}
//export function  listClear(list: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayClear(arr);
//					return;
//			}
//			list.clear();
//	}
//export function listContains(list: any, item: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return arr.indexOf(item) > -1;
//			}
//			return list.contains(item);
//	}
//export function listIndexOf(list: any, item: any): number {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return arr.indexOf(item);
//			}
//			return list.indexOf(item);
//	}
//export function listInsert(list: any, index: number, item: any): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					arrayInsert(arr, index, item);
//					return;
//			}
//			list.contains(item);
//	}
//export function listRemove(list: any, item: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//                       arrayRemoveItem(arr, item);
//                       return true;
//			}
//			return list.remove(item);
//	}
//export function listRemoveAt(list: any, index: number): void {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//                       arrayRemoveAt(arr, index);
//                       return;
//			}
//			list.removeAt(index);
//	}
//export function listIsFixedSize(list: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return false;
//			}
//			return list.isFixedSize;
//	}
//export function listIsReadOnly(list: any): boolean {
//			if ((<any>list).$type === undefined) {
//					let arr = <any[]>list;
//					return false;
//			}
//			return list.isReadOnly;
//	}
//export function collectionCount(collection: any): number {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return arr.length;
//			}
//			return collection.count;
//	}
//export function collectionCopyTo(collection: any, array: any[], index: number): void {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					arrayCopy(arr, 0, array, index, arr.length);
//					return;
//			}
//			return collection.copyTo(array, index);
//	}
//export function collectionIsSynchronized(collection: any): boolean {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return false;
//			}
//			return collection.isSynchronized;
//	}
//export function collectionSyncRoot(collection: any): any {
//			if ((<any>collection).$type === undefined) {
//					let arr = <any[]>collection;
//					return arr;
//			}
//			return collection.syncRoot;
//   }
export function boxArray$1(array) {
    return new ArrayBox$1(array);
}
export function unboxArray(box) {
    if (box.$arrayWrapper) {
        return box._target;
    }
    return box;
}
export function arrayListCreate() {
    return new ArrayBox$1([]);
}
export class ArrayBox$1 {
    constructor(target) {
        this.isFixedSize = false;
        this.isSynchronized = false;
        this.syncRoot = null;
        this.isReadOnly = false;
        this.$arrayWrapper = true;
        this._target = target;
    }
    item(index, value) {
        if (arguments.length === 2) {
            this._target[index] = value;
            return value;
        }
        else {
            return this._target[index];
        }
    }
    indexOf(item) {
        return this._target.indexOf(item);
    }
    insert(index, item) {
        this._target.splice(index, 0, item);
    }
    insertRange(index, items) {
        arrayInsertRange(this._target, index, items);
    }
    removeRange(index, count) {
        this._target.splice(index, count);
    }
    removeAt(index) {
        this._target.splice(index, 1);
    }
    get count() {
        return this._target.length;
    }
    add(item) {
        this._target.push(item);
    }
    clear() {
        this._target.length = 0;
    }
    contains(item) {
        return this._target.indexOf(item) >= 0;
    }
    copyTo(array, arrayIndex) {
        for (let i = 0; i < this._target.length; i++) {
            array[i + arrayIndex] = this._target[i];
        }
    }
    remove(item) {
        let index = this._target.indexOf(item);
        if (index < 0) {
            return false;
        }
        this._target.splice(index, 1);
        return true;
    }
    getEnumerator() {
        return getEnumerator(this._target);
    }
    getEnumeratorObject() {
        return getEnumeratorObject(this._target);
    }
    getHashCode() {
        return Base.getHashCodeStatic(this._target);
    }
    equals(other) {
        if (other.$arrayWrapper) {
            other = other._target;
        }
        return this._target === other;
    }
    get $type() {
        return Array_$type;
    }
    reverse() {
        let len = this._target.length;
        for (let i = 0; i < len / 2.0; i++) {
            let swap = this._target[(len - 1) - i];
            this._target[(len - 1) - i] = this._target[i];
            this._target[i] = swap;
        }
    }
}
//# sourceMappingURL=array.js.map