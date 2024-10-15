# How to contribute

Thank you for considering contributing to **The Open-Source Calculator**! We welcome contributions from everyone, whether you are a first-time contributor or an experienced open-source developer. Please take the time to read these guidelines, as they will make the contribution process smoother for everyone involved.

## Table of Contents

1. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Code Contributions](#code-contributions)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Setting up the Environment](#setting-up-the-environment)
3. [Pull Request Process](#pull-request-process)
4. [Code Style Guidelines](#code-style-guidelines)
5. [Commit Message Guidelines](#commit-message-guidelines)
6. [License](#license)

## How to Contribute

### Reporting Bugs

If you discover a bug, please report it by creating a new issue. Include as much detail as possible:

- **Description of the bug**: What is the problem?
- **Steps to reproduce**: How can the bug be triggered?
- **Expected behavior**: What should have happened instead?
- **Screenshots or logs**: Add any screenshots or log outputs that help explain the issue.

Before submitting a bug report, please check if there is already an open issue for the bug.

### Suggesting Enhancements

Enhancement suggestions are welcome. To suggest a new feature or improvement, create an issue and describe:

- **The problem or opportunity**: What is missing or could be better?
- **Proposed solution**: How do you think it should work?
- **Additional context**: Add any other information that could be helpful.

### Code Contributions

We gladly accept contributions in the form of pull requests for bug fixes, new features, or improvements. If you're new to the project, it’s best to start by claiming an issue or discussing your planned contribution by opening a new issue. This helps avoid duplicate work or ideas that don't align with the project's roadmap.

## Getting Started

### Prerequisites

Ensure you have the following installed before contributing:

- **Node.js** (version 14.x or above)
- **npm** or **yarn** (depending on the project’s package manager)
- **Git** for version control

### Setting up the Environment

1. **Fork the repository** to your GitHub account.
2. **Clone the repository** locally:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   ```

3. Navigate to the project directory:

   ```bash
   cd your-project-name
   ```

4. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

5. Start the development server to verify that everything is working:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Make sure all tests pass:

   ```bash
   npm run test
   # or
   yarn test
   ```

You are now ready to start contributing!

## Pull Request Process

1. **Create a new branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Commit your changes** (following our [commit message guidelines](#commit-message-guidelines)).

3. **Push the branch** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a pull request** against the `main` branch of the repository. Be sure to describe your changes in detail and link any relevant issues.

5. **Review Process**: One or more maintainers will review your pull request, provide feedback, and merge it if everything is in order.

Make sure your PR:

- Passes all tests (CI should do this automatically).
- Is well-documented, if applicable.

## Code Style Guidelines

To ensure consistency across the project, please follow these code style guidelines:

- **JavaScript/Next.js**: Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Use **Prettier** for code formatting. We recommend setting up a pre-commit hook to automatically format code before commits.
- Keep components small and modular, adhering to the Next.js file structure.
- Write **React hooks** responsibly and avoid excessive side effects in components.
- Ensure that **accessibility** (a11y) is considered in UI components.

Before submitting a pull request, run:

```bash
npm run lint
# or
yarn lint
```

This will check for any code style violations.

## Commit Message Guidelines

We follow the **Conventional Commits** specification for writing commit messages. This helps to create an understandable history and enables semantic versioning.

### Commit Message Format

Each commit message should consist of a **header**, an **optional body**, and an **optional footer**:

```
<type>(<scope>): <subject>
```

### Types

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation only changes.
- **style**: Code changes that do not affect the meaning (white-space, formatting, etc.).
- **refactor**: Code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing or correcting existing tests.
- **chore**: Changes to the build process or auxiliary tools.

### Example

```
feat(auth): add OAuth2 login flow
fix(auth): correct validation on email input
docs(readme): update installation instructions
```

- **subject**: Concise description of the change.
- **scope** (optional): Context of the change (e.g., a module or component).
- **body** (optional): More detailed explanation if needed.
- **footer** (optional): Reference issues or breaking changes (e.g., `BREAKING CHANGE: <description>`).

### Tips

- Use the imperative mood in the subject (e.g., "fix bug" not "fixed bug").
- Limit the subject line to 50 characters.
- Wrap the body at 72 characters.
- Reference issues and PRs where applicable (e.g., `fixes #123`).
