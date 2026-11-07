# Milestones

### M0 Proposal
**Question: Which story did you cut from the MVP, and why?**

I moved four stories to nice-to-have: the category tree (story 7), admin user management (story 8), the activity log (story 9), and book cover image link (story 10). The core of the app is borrowing, returning, and the librarian's catalogue and loan desk, and it already works with two roles (member and librarian) if the librarian account comes from the seed. The activity log was the biggest cut: it adds a log entry to every other feature, so it would slow all of them down, and nothing else depends on it. I will add these four after the must-have stories work and are tested.

### M1 Frontend Prototype
**Question: What state lives in the store and what stays inside a component? Why?**

There are 3 states living inside bookStore such as books, loading, and error. They are like a shared resource that can be used accross the views. For example, CatalogueView and BookDetailView, they will use the same data (books, loading, error). The things that stay inside a component are not a shared resource, they are belong to a specific view. For example in RegisterView, we have variables such as fullName, email, password, confirmPassword, etc. They are all belong to RegisterView because we do not use them in other views.