# lets-overengineering

# 🧼 Clean Architecture Playground – The Epic Journey to Change a User Name

Welcome. This repository is a tribute to extreme architectural rigor applied to the most trivial use case imaginable:

> ✅ Change a user's name  
> 🔁 That's it. That’s all it does. Nothing more.

---

## 🎯 Objective

To faithfully apply every possible Clean Architecture concept to a task that **absolutely doesn’t need it**.

---

## ⚠️ This is NOT for educational purposes

Let’s be clear: this is not a tutorial or a toy project.

**This is a reflection of real-world software development environments**, where teams actually implement this level of architecture _with a straight face_.

---

## 📕 Why this exists

Because there are developers who live by one sacred rule:

> “If it’s not in a book, it’s not valid.”

Welcome to the reign of **book fundamentalism**.  
In such environments:

- "Simplicity is suspicious"
- "Every HTTP request must pass through 7 layers of abstraction"
- "You can’t return a value directly—it must be presented via an OutputPort"
- "Is there a reference for that design choice? Which page of the book?"

This repo is for them.

---

## 🧱 Architecture Overview (50+ files for one PATCH)

Here’s what it takes to change a single user’s name:

src/
├── controllers/
│ └── ChangeUserNameController.ts
├── routes/
│ └── userRoutes.ts
├── request-dto/
│ └── ChangeUserNameRequest.ts
├── response-dto/
│ └── ChangeUserNameResponse.ts
├── commands/
│ ├── ChangeUserNameCommand.ts
│ └── ChangeUserNameCommandMapper.ts
├── usecases/
│ └── ChangeUserNameUseCase.ts
├── input-ports/
│ └── IChangeUserNameInputPort.ts
├── output-ports/
│ └── IChangeUserNameOutputPort.ts
├── application/
│ └── UserApplicationService.ts
├── domain/
│ ├── entities/
│ │ └── User.ts
│ ├── value-objects/
│ │ ├── UserId.ts
│ │ └── UserName.ts
│ ├── repositories/
│ │ └── IUserRepository.ts
│ ├── services/
│ │ └── UserDomainService.ts
│ ├── policies/
│ │ └── UserNameChangePolicy.ts
│ └── specifications/
│ └── UserNameSpecification.ts
├── infrastructure/
│ └── repositories/
│ └── UserRepositoryImpl.ts
├── presenters/
│ └── ChangeUserNamePresenter.ts
├── events/
│ ├── UserNameChangedEvent.ts
│ └── DomainEventDispatcher.ts
├── loggers/
│ └── ConsoleLogger.ts
├── exceptions/
│ └── ExceptionMapper.ts
├── tests/
│ ├── controllers/
│ ├── usecases/
│ ├── entities/
│ ├── presenters/
│ ├── repositories/
│ └── integrations/

> Yes, every layer is fully test-covered.  
> Because what is architecture, if not _bureaucracy with 100% test coverage_?

---

## 🧠 What You'll Learn (Ironically)

- How to over-engineer a trivial use case
- How to destroy developer velocity with a straight face
- How to turn an architectural pattern into a religion
- How to simulate complexity where none exists
- How to convert 1 line of logic into 1000 lines of abstraction

---

## ☠️ Real-World Pain

- PRs require 4 reviewers debating philosophical purity
- Refactoring a method name causes 12 files to fail tests
- A single change flows through Entity → Policy → Spec → UseCase → Port → Presenter
- The business value is irrelevant—**architectural integrity is the real deliverable**

---

## 💬 Final Words

> “It’s just a name change.”  
> “No. It’s a Clean Architecture journey.”

If you’ve ever been on a team where complexity is celebrated, where abstraction is power, and where _thinking is outsourced to books_—you’ll feel right at home here.

---
