/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
var UndoLocaleFr = /** @class */ (function () {
    function UndoLocaleFr() {
        this["AddItemDescription"] = "Ajouter {1}";
        this["AddItemDescriptionDetailed"] = "Ajouter {1}";
        this["AddRangeDescription"] = "Ajouter {1} {2}(s)";
        this["AddRangeDescriptionDetailed"] = "Ajouter {1} {2}(s)";
        this["FallbackTransactionDescription"] = "";
        this["LE_AddOpenTransaction"] = "Cannot add an UndoTransaction that has not been opened or is still open.";
        this["LE_AddTransactionDirect"] = "UndoTransaction cannot be added. The RootTransaction is automatically added upon Commit.";
        this["LE_AddUnitWhileTransactionOpen"] = "Cannot add an UndoUnit while the transaction contains a nested open transaction '{0}'.";
        this["LE_ArgumentIsNegative"] = "The '{0}' must be 0 or greater. Actual value: '{1}'";
        this["LE_CannotExecuteOpenTransaction"] = "Cannot invoke Execute while the transaction '{0}' is open.";
        this["LE_ChangeHistoryInMerge"] = "Cannot alter the Undo/Redo history while a Merge is being invoked";
        this["LE_ChangeHistoryInRemoveAll"] = "Cannot alter the Undo/Redo history while the RemoveAll is being invoked.";
        this["LE_ChildTransactionNotInUnits"] = "The specified child transaction '{0}' is not part of the Units of this transaction.";
        this["LE_ClosingOtherTransaction"] = "The specified transaction '{0}' is not the currently open transaction '{1}'.";
        this["LE_EndTransactionWhileSuspended"] = "Cannot close a transaction while the UndoManager is suspended.";
        this["LE_EnumEnded"] = "The enumerator was completed.";
        this["LE_EnumFailedVersion"] = "The collection was modified after the enumerator was started.";
        this["LE_EnumNotStarted"] = "The enumerator was not started. Call MoveNext.";
        this["LE_FactoryNullTransaction"] = "The UndoUnitFactory returned a null UndoTransaction.";
        this["LE_HasOpenTransaction"] = "A transaction has already been opened.";
        this["LE_HistoryItemNotInCurrentHistory"] = "The UndoHistoryItem does not exist within the associated Undo or Redo history in the UndoManager.";
        this["LE_InvalidTransactionOwner"] = "The specified transaction's Owner is not this object.";
        this["LE_NeedAddRemoveAction"] = "The specified action must be 'Add' or 'Remove'.";
        this["LE_NewTransactionWhileSuspended"] = "A transaction cannot be started while the UndoManager is suspended.";
        this["LE_RangeCollectionAction"] = "Range actions are not supported.";
        this["LE_ReferenceNotRegistered"] = "The specified reference '{0}' has not been registered with an UndoManager instance. Use the RegisterReference method to register the reference with an UndoManager or pass null as the 'reference' to use the UndoManager.Current thread static/shared instance.";
        this["LE_ReferenceRegisteredToOther"] = "The specified reference '{0}' is registered with a different UndoManager instance.";
        this["LE_RemoveAllFailedVersion"] = "The collection was modified during the call to RemoveAll.";
        this["LE_ResetCollectionAction"] = "Reset action is not supported.";
        this["LE_TargetCollectionIsReadOnly"] = "The specified collection '{0}' cannot be read-only.";
        this["LE_TransactionAlreadyOpened"] = "The transaction has already been opened.";
        this["LE_TransactionClosed"] = "The transaction cannot be modified once it has been closed.";
        this["LE_TransactionNotOpened"] = "The specified transaction '{0}' is not open.";
        this["LE_TransactionNotStarted"] = "The transaction cannot be modified until it has been started.";
        this["LE_UndoManagerAsReference"] = "An 'UndoManager' instance cannot be a reference.";
        this["LE_UndoRedoInRollback"] = "Cannot perform an Undo/Redo while a Rollback is in progress.";
        this["LE_UndoRedoInTransaction"] = "Cannot perform an undo/redo while a transaction is opened.";
        this["LE_UndoRedoInUndoRedo"] = "Cannot perform an Undo/Redo while an Undo/Redo is in progress.";
        this["LE_UndoRedoWhileSuspended"] = "Cannot perform an Undo/Redo while the UndoManager has been suspended.";
        this["MoveItemDescription"] = "Déplacer {1}";
        this["MoveItemDescriptionDetailed"] = "Déplacer {1} de '{2}' à '{3}'";
        this["PropertyChangeDescription"] = "Modifier {0} sur {1}";
        this["PropertyChangeDescriptionDetailed"] = "Modifier {0} sur {1} à '{2}'";
        this["ReinitializeCollectionDescription"] = "Modification en bloc {2}";
        this["ReinitializeCollectionDescriptionDetailed"] = "Modification en bloc {2}";
        this["RemoveItemDescription"] = "Supprimer {1}";
        this["RemoveItemDescriptionDetailed"] = "Supprimer {1}";
        this["RemoveRangeDescription"] = "Supprimer {1} {2}(s)";
        this["RemoveRangeDescriptionDetailed"] = "Supprimer {1} {2}(s)";
        this["ReplaceItemDescription"] = "Remplacer {1}";
        this["ReplaceItemDescriptionDetailed"] = "Remplacer '{1}' par '{2}'";
    }
    return UndoLocaleFr;
}());
export { UndoLocaleFr };
//# sourceMappingURL=UndoLocaleFr.js.map