export interface Loan {
    id: number,
    member_id: number,                      // BORROWER_ID
    book_id: number,   
    loaned_by_id: number,                   // WHO GIVE THE BOOK? (LIBRARIAN or ADMIN)
    borrowed_at: string,   
    due_date: string,                       // NOW + 14 DAYS
    returned_at: string | null,             // NULL = not yet return
    returned_by_id: number | null,          // WHO RETURN THE BOOK? (the librarain or admin must be the one who complete this)
}