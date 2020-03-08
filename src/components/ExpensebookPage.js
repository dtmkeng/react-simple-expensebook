import React from 'react';
import styled from 'styled-components';
import { ExpensebookHead } from './ExpensebookHead';
import { ExpensebookFilter } from './ExpensebookFilter';
import { ExpenseItemList } from './ExpenseItemList';
import { CreateItem } from './CreateItem';

const PageBody = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 48rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const ExpensebookPage = () => {
  return (
    <PageBody>
      <ExpensebookHead />
      <ExpensebookFilter />
      <ExpenseItemList />
      <CreateItem />
    </PageBody>
  );
};

ExpensebookPage.defaultProps = {};

ExpensebookPage.displayName = 'ExpensebookPage';
