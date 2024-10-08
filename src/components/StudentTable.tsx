'use client'

import { Student } from '@prisma/client';
import * as React from 'react';
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@table-library/react-table-library/table';

export function StudentTable({list} : {list: Student[]}) {
  return (
    <Table data={{nodes: list}}>
    {(studentList) => (
      <>
      <Header>
        <HeaderRow>
          <HeaderCell>StudentID</HeaderCell>
          <HeaderCell>FirstName</HeaderCell>
          <HeaderCell>LastName</HeaderCell>
          <HeaderCell>Email</HeaderCell>
          <HeaderCell>ProgramCode</HeaderCell>
        </HeaderRow>
      </Header>
      <Body>
            {studentList.map((student) => (
              <Row key={student.StudentID} item={student}>
                <Cell>{student.StudentID}</Cell>
                <Cell>{student.FirstName}</Cell>
                <Cell>{student.LastName}</Cell>
                <Cell>{student.Email}</Cell>
                <Cell>{student.ProgramCode}</Cell>
              </Row>
            ))}
      </Body>
      </>

    )}
    </Table>
  )
}