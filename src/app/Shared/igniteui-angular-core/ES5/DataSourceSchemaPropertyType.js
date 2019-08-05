/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Enumerates the available property types on a data source schema.
 */
export var DataSourceSchemaPropertyType;
(function (DataSourceSchemaPropertyType) {
    /**
     * The property is of type string.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["StringValue"] = 0] = "StringValue";
    /**
     * The property is of type integer.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["IntValue"] = 1] = "IntValue";
    /**
     * The property is of type boolean.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["BooleanValue"] = 2] = "BooleanValue";
    /**
     * The property is of type long.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["LongValue"] = 3] = "LongValue";
    /**
     * The property if of type short.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["ShortValue"] = 4] = "ShortValue";
    /**
     * The property is of type double.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["DoubleValue"] = 5] = "DoubleValue";
    /**
     * The property is of type decimal.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["DecimalValue"] = 6] = "DecimalValue";
    /**
     * The property is of type single.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["SingleValue"] = 7] = "SingleValue";
    /**
     * The property is of type datetime.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["DateTimeValue"] = 8] = "DateTimeValue";
    /**
     * The property is of type datetimeoffset.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["DateTimeOffsetValue"] = 9] = "DateTimeOffsetValue";
    /**
     * The property is of type byte.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["ByteValue"] = 10] = "ByteValue";
    /**
     * The property is of type object.
     */
    DataSourceSchemaPropertyType[DataSourceSchemaPropertyType["ObjectValue"] = 11] = "ObjectValue";
})(DataSourceSchemaPropertyType || (DataSourceSchemaPropertyType = {}));
/**
 * @hidden
 */
export var DataSourceSchemaPropertyType_$type = markEnum('DataSourceSchemaPropertyType', 'StringValue,0|IntValue,1|BooleanValue,2|LongValue,3|ShortValue,4|DoubleValue,5|DecimalValue,6|SingleValue,7|DateTimeValue,8|DateTimeOffsetValue,9|ByteValue,10|ObjectValue,11');
//# sourceMappingURL=DataSourceSchemaPropertyType.js.map