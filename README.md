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
├── application/
│ ├── command/
│ │ ├── changeUserNameCommand.ts
│ │ ├── changeUserNameCommand.test.ts
│ │ ├── changeUserNameCommandMapper.ts
│ │ └── changeUserNameCommandMapper.test.ts
│ ├── usecase/
│ │ ├── changeUserNameUseCase.ts
│ │ └── changeUserNameUseCase.test.ts
│ ├── input-port/
│ │ └── changeUserNameInputPort.ts
│ ├── output-port/
│ │ └── changeUserNameOutputPort.ts
│ ├── service/
│ │ ├── userApplicationService.ts
│ │ └── userApplicationService.test.ts

├── domain/
│ ├── aggregate/
│ │ ├── userAggregate.ts
│ │ └── userAggregate.test.ts
│ ├── entity/
│ │ ├── user.ts
│ │ └── user.test.ts
│ ├── value-object/
│ │ ├── userId.ts
│ │ ├── userId.test.ts
│ │ ├── userName.ts
│ │ └── userName.test.ts
│ ├── policy/
│ │ ├── namePolicy.ts
│ │ └── namePolicy.test.ts
│ ├── specification/
│ │ ├── userNameSpecification.ts
│ │ └── userNameSpecification.test.ts
│ ├── service/
│ │ ├── userDomainService.ts
│ │ └── userDomainService.test.ts
│ ├── event/
│ │ ├── userNameChangedEvent.ts
│ │ ├── userNameChangedEvent.test.ts
│ │ ├── domainEventDispatcher.ts
│ │ └── domainEventDispatcher.test.ts
│ ├── repository/
│ │ ├── userRepository.ts
│ │ └── userRepository.test.ts

├── infrastructure/
│ └── repository/
│ ├── userRepositoryImpl.ts
│ └── userRepositoryImpl.test.ts

├── interface-adapter/
│ ├── controller/
│ │ ├── changeUserNameController.ts
│ │ └── changeUserNameController.test.ts
│ ├── presenter/
│ │ ├── changeUserNamePresenter.ts
│ │ └── changeUserNamePresenter.test.ts
│ ├── dto/
│ │ ├── changeUserNameRequest.dto.ts
│ │ ├── changeUserNameResponse.dto.ts
│ │ └── changeUserNameRequest.dto.test.ts
│ ├── router/
│ │ ├── userRouter.ts
│ │ └── userRouter.test.ts
│ ├── validator/
│ │ ├── changeUserNameRequestValidator.ts
│ │ └── changeUserNameRequestValidator.test.ts
│ └── middleware/
│ ├── exceptionHandler.ts
│ └── exceptionHandler.test.ts

├── shared/
│ ├── exception/
│ │ ├── userAlreadyExists.error.ts
│ │ ├── invalidUserName.error.ts
│ │ └── exceptionMapper.test.ts
│ ├── logger/
│ │ ├── consoleLogger.ts
│ │ └── consoleLogger.test.ts
│ └── types/
│ └── http.ts

├── main.ts
└── app.ts

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
