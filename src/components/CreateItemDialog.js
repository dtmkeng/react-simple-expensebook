import React, { useRef } from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';
import { useDialogDispatch } from '../contexts/DialogContext';
import { useInput } from '../useInput';
import { useExpenseDispatch } from '../contexts/ExpenseContext';

export const CreateItemDialog = ({ visible }) => {
  const dialogDispatch = useDialogDispatch();
  const expenseDispatch = useExpenseDispatch();
  const { form, onChangeField, reset } = useInput();
  const nextItemId = useRef(6);

  const handleDialogCancel = () => {
    dialogDispatch({ type: 'CLOSE_DIALOG' });
    reset();
  };
  const handleCreateConfirm = () => {
    expenseDispatch({
      type: 'CREATE_ITEM',
      id: nextItemId.current,
      title: form.title,
      category: form.category,
      amount: form.amount,
    });
    nextItemId.current += 1;
    handleDialogCancel();
  };

  return (
    <Dialog
      title="지출 등록"
      confirmText="등록"
      visible={visible}
      onCancel={handleDialogCancel}
      onConfirm={handleCreateConfirm}
    >
      <ItemForm onChangeField={onChangeField} formValues={form} />
    </Dialog>
  );
};

CreateItemDialog.defaultProps = {
  visible: false,
};

CreateItemDialog.displayName = 'CreateItemDialog';
