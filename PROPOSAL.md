# Library Loans

## Problem
Library members cannot easily see which books are available or when their borrowed books are due, and librarians track loans on paper or in spreadsheets. This leads to the last copy being lent twice, overdue loans going unnoticed, and no record of who changed what.

## Users and roles
- Member: searches the catalogue, borrows and returns their own books, and sees their own loans with due dates
- Librarian: manages the book catalogue, lends and returns books for members at the desk, and sees all loans and overdue loans
- Admin (nice to have): promotes users to librarian, deactivates accounts, and reads the activity log

## User stories
1. As a visitor, I want to register and log in so that I can use the library as a member.
   Accepted when: valid details create a MEMBER account with a hashed password; a wrong password shows "Invalid email or password"; any page except login and register redirects to login when I am logged out

2. As a member, I want to search the catalogue by title or author so that I can find a book and see whether a copy is free.
   Accepted when: results are shown 10 per page with next and previous controls; a search matches title or author in any letter case; an empty result shows "No books found"; each book shows how many copies are left

3. As a member, I want to borrow an available book so that I can take it home.
   Accepted when: a valid borrow creates a loan due in 14 days and lowers copies left by 1; it fails with a clear message if no copy is left, I already hold 3 loans, I have an overdue loan, or I already hold this book; if two members borrow the last copy at the same moment, one succeeds and the other fails

4. As a member, I want to see my loans and return a book so that I know my due dates and free the copy when I am done.
   Accepted when: My loans shows each loan with its due date and status (active, overdue, returned); returning a book sets the return date and gives the copy back; another member's loan is never visible to me (the API answers 404)

5. As a librarian, I want to add, edit, deactivate, and delete books so that the catalogue stays accurate.
   Accepted when: invalid data (for example a missing title or negative copies) shows a validation message; a book that has loan history cannot be deleted; a member who calls these actions is refused (403)

6. As a librarian, I want to see all loans and overdue loans, and return a book for a member, so that the desk runs from one screen.
   Accepted when: the loan list can be filtered by status and shows days overdue for late loans; returning for a member gives the copy back; a member who calls it is refused (403)

7. (Nice to have) As a librarian, I want to organise books in a category tree (for example Science > Computer Science) so that members can browse by topic.

8. (Nice to have) As an admin, I want to change a user's role and deactivate accounts so that staff accounts stay controlled.

9. (Nice to have) As a librarian, I want an activity log with the old and new value of every change so that I can tell who changed what.

10. (Nice to have) As a librarian, I want to add a cover image link to a book so that members recognise it in the catalogue.

## MVP scope
Must have: story 1, 2, 3, 4, 5, 6
Nice to have: story 7, 8, 9, 10

## Entities
| Entity | Main attributes | Relations |
|---|---|---|
| User | name, email, passwordHash, role (MEMBER, LIBRARIAN, ADMIN), active | has many Loans |
| Book | title, author, isbn, description, coverUrl, copiesTotal, copiesAvailable, active | has many Loans; belongs to a Category (nice to have) |
| Loan | borrowedAt, dueDate, returnedAt | belongs to a User (the member) and to a Book |
| Category (nice to have) | name, parentId, active | optional parent Category, many child Categories, has many Books |
| ActivityLog (nice to have) | action, entityType, entityId, oldValue, newValue, createdAt | optionally belongs to a User |

## Stretch feature
Search + pagination.
What it does in this app: members and librarians search books by title or author, can show only available books, and browse the results 10 per page; the loan lists use the same paging.

## Repository
https://github.com/SetharTyKun/ip1-e20230389
