/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
export class UndoLocaleJa {
    constructor() {
        this["AddItemDescription"] = "'{1}' の追加";
        this["AddItemDescriptionDetailed"] = "'{1}' の追加";
        this["AddRangeDescription"] = "{1} {2}の追加";
        this["AddRangeDescriptionDetailed"] = "{1} {2}の追加";
        this["FallbackTransactionDescription"] = "";
        this["LE_AddOpenTransaction"] = "開かれたことがない、または開いている UndoTransaction は追加できません。";
        this["LE_AddTransactionDirect"] = "UndoTransaction は追加できません。RootTransaction は自動的に Commit に追加されます。";
        this["LE_AddUnitWhileTransactionOpen"] = "トランザクションが入れ子になった開いているトランザクション '{0}' を含む場合、UndoUnit を追加できません。";
        this["LE_ArgumentIsNegative"] = " '{0}' は 0 以上である必要があります。現在値: '{1}'";
        this["LE_CannotExecuteOpenTransaction"] = "トランザクション '{0}' が開いている間に Execute を呼び出すことはできません。";
        this["LE_ChangeHistoryInMerge"] = "Merge が呼び出されている間は Undo/Redo 履歴を変更できません。";
        this["LE_ChangeHistoryInRemoveAll"] = "RemoveAll が呼び出されている間は Undo/Redo 履歴を変更できません。";
        this["LE_ChildTransactionNotInUnits"] = "指定した子トランザクション '{0}' は、このトランザクション ユニットの一部ではありません。";
        this["LE_ClosingOtherTransaction"] = "指定したトランザクション '{0}' は現在開いているトランザクション '{1}' ではありません。 ";
        this["LE_EndTransactionWhileSuspended"] = "UndoManager が中断している間はトランザクションを閉じることはできません。";
        this["LE_EnumEnded"] = "列挙が完了しました。";
        this["LE_EnumFailedVersion"] = "コレクションは列挙子の開始後に変更されました。";
        this["LE_EnumNotStarted"] = "列挙子は開始されませんでした。MoveNext を呼び出します。";
        this["LE_FactoryNullTransaction"] = "UndoUnitFactory は null Undo トランザクションを返します。";
        this["LE_HasOpenTransaction"] = "トランザクションはすでに開いています。";
        this["LE_HistoryItemNotInCurrentHistory"] = "UndoManager で、関連づけられた元に戻すまたはやり直しの履歴内にUndoHistoryItem が存在しません。";
        this["LE_InvalidTransactionOwner"] = "指定したトランザクションの Owner はこのオブジェクトではありません。";
        this["LE_NeedAddRemoveAction"] = "指定するアクションは 'Add' or 'Remove' にしてください。";
        this["LE_NewTransactionWhileSuspended"] = "UndoManager が中断している間はトランザクションを開始できません。";
        this["LE_RangeCollectionAction"] = "Range アクションはサポートされません。";
        this["LE_ReferenceNotRegistered"] = "指定した参照 '{0}' は UndoManager インスタンスに登録されていません。 \r\nRegisterReference メソッドを使用して UndoManager と参照を登録します。または、UndoManager.Current thread 静的/共有インスタンスを使用するために参照として null を渡します。";
        this["LE_ReferenceRegisteredToOther"] = "指定した参照 '{0}' は、異なるUndoManager インスタンスで登録されます。";
        this["LE_RemoveAllFailedVersion"] = "コレクションは RemoveAll への呼び出し中に変更されました。";
        this["LE_ResetCollectionAction"] = "Reset アクションはサポートされません。";
        this["LE_TargetCollectionIsReadOnly"] = "指定したコレクション '{0}' は読み取り専用です。";
        this["LE_TransactionAlreadyOpened"] = "トランザクションはすでに開いています。";
        this["LE_TransactionClosed"] = "トランザクションは閉じられるまで変更できません。";
        this["LE_TransactionNotOpened"] = "指定したトランザクション '{0}' は開いていません。";
        this["LE_TransactionNotStarted"] = "トランザクションは開始されるまで変更できません。";
        this["LE_UndoManagerAsReference"] = "'UndoManager' インスタンスは参照にできません。";
        this["LE_UndoRedoInRollback"] = "Rollback 処理中は Undo/Redo を実行できません。";
        this["LE_UndoRedoInTransaction"] = "トランザクションが開いているときは Undo/Redo を実行できません。";
        this["LE_UndoRedoInUndoRedo"] = "Undo/Redo 処理中は Undo/Redo を実行できません。";
        this["LE_UndoRedoWhileSuspended"] = "UndoManager 処理中は Undo/Redo を実行できません。";
        this["MoveItemDescription"] = "項目の移動";
        this["MoveItemDescriptionDetailed"] = "'{1}' を '{2}' から '{3}' へ移動する";
        this["PropertyChangeDescription"] = "'{1}' の '{0}' を変更";
        this["PropertyChangeDescriptionDetailed"] = "'{1}' の '{0}' を '{3}' へ変更";
        this["ReinitializeCollectionDescription"] = "'{2}' の一括変更";
        this["ReinitializeCollectionDescriptionDetailed"] = "'{2}' の一括変更";
        this["RemoveItemDescription"] = "'{1}' の移動";
        this["RemoveItemDescriptionDetailed"] = "'{1}' の削除";
        this["RemoveRangeDescription"] = "{1} {2} の削除";
        this["RemoveRangeDescriptionDetailed"] = "{1} {2} の削除";
        this["ReplaceItemDescription"] = "'{1}' の置き換え";
        this["ReplaceItemDescriptionDetailed"] = "'{1}' を '{2}' と置き換える";
    }
}
//# sourceMappingURL=UndoLocaleJa.js.map