# Contributing to SmartNotes

Thank you for considering contributing to SmartNotes! We welcome contributions from developers of all skill levels. This document provides guidelines and information on how to contribute to the project.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Issue Reporting](#issue-reporting)
- [Development Workflow](#development-workflow)
- [Testing Guidelines](#testing-guidelines)

## 🤝 Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow:

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them get started
- **Be collaborative**: Work together and help each other
- **Be constructive**: Provide helpful feedback and suggestions
- **Be professional**: Keep discussions focused on the project

## 🚀 Getting Started

### Prerequisites
Before contributing, make sure you have:
- Node.js (v16 or higher)
- npm or yarn
- Git
- MongoDB (local or Atlas account)
- A code editor (VS Code recommended)

### Fork and Clone
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/SmartNotes-MERN.git
   cd SmartNotes-MERN
   ```
3. Add the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/Imesh-Bandar/SmartNotes-MERN.git
   ```

## 🛠 Development Setup

### 1. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Setup
Create a `.env` file in the `backend` directory:
```env
MONGODB_URL=mongodb://localhost:27017/smartnotes-dev
PORT=4500
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### 3. Start Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🤝 How to Contribute

### Types of Contributions
We welcome various types of contributions:

- **🐛 Bug Fixes**: Fix existing bugs or issues
- **✨ New Features**: Add new functionality
- **📚 Documentation**: Improve or add documentation
- **🎨 UI/UX Improvements**: Enhance the user interface
- **⚡ Performance Optimizations**: Improve app performance
- **🧪 Tests**: Add or improve test coverage
- **🔧 Refactoring**: Improve code quality and structure

### Before You Start
1. Check existing [issues](https://github.com/Imesh-Bandar/SmartNotes-MERN/issues) to see if your idea is already being worked on
2. Open a new issue to discuss major changes before implementing them
3. Look for issues labeled `good first issue` if you're new to the project

## 📝 Pull Request Process

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes
- Test your changes locally
- Ensure both frontend and backend work correctly
- Verify that existing functionality isn't broken

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add new feature description"
```

### 5. Push and Create Pull Request
```bash
git push origin your-branch-name
```
Then create a pull request on GitHub with:
- Clear title and description
- Reference any related issues
- Screenshots for UI changes
- Details about what was changed and why

### 6. Pull Request Requirements
- [ ] Code follows the project's coding standards
- [ ] Changes are tested and working
- [ ] Documentation is updated (if applicable)
- [ ] Commit messages follow the guidelines
- [ ] No merge conflicts
- [ ] All checks pass

## 💻 Coding Standards

### JavaScript/React Standards
- Use ES6+ features and modern JavaScript
- Prefer functional components with hooks
- Use meaningful variable and function names
- Follow React best practices
- Use Tailwind CSS for styling

### File Naming Conventions
- React components: `PascalCase.jsx` (e.g., `CreatePage.jsx`)
- JavaScript files: `camelCase.js` (e.g., `noteControllers.js`)
- Folders: `lowercase` or `camelCase`

### Code Style
```javascript
// ✅ Good
const createNote = async (req, res) => {
  const { title, content } = req.body;
  
  try {
    const note = await Note.create({ title, content });
    res.status(201).json({ success: true, note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Avoid
const createNote=async(req,res)=>{
const title=req.body.title;
const content=req.body.content;
try{
const note=await Note.create({title:title,content:content})
res.status(201).json({success:true,note:note})
}catch(error){
res.status(500).json({error:error.message})
}
}
```

### React Component Structure
```jsx
// ✅ Good component structure
import React, { useState, useEffect } from 'react';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Component logic
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto p-4">
      {/* Component JSX */}
    </div>
  );
};

export default CreatePage;
```

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(frontend): add dark mode toggle button
fix(api): resolve validation error for empty notes
docs: update installation instructions
style(frontend): improve responsive design for mobile
refactor(backend): optimize database queries
test(api): add unit tests for note controllers
chore: update dependencies to latest versions
```

## 🐛 Issue Reporting

### Before Creating an Issue
1. Search existing issues to avoid duplicates
2. Check if the issue exists in the latest version
3. Try to reproduce the issue with minimal steps

### Issue Template
When creating an issue, please include:

```markdown
## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g., Windows 10, macOS Big Sur]
- Browser: [e.g., Chrome 95, Firefox 94]
- Node.js version: [e.g., 16.14.0]
- Project version: [e.g., 1.0.0]

## Screenshots
If applicable, add screenshots to help explain the problem.

## Additional Context
Any other context about the problem.
```

## 🔄 Development Workflow

### 1. Stay Updated
```bash
git checkout main
git pull upstream main
```

### 2. Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### 3. Development Process
- Make small, focused commits
- Test changes frequently
- Keep your branch updated with main
- Follow coding standards

### 4. Before Submitting PR
```bash
# Update your branch with latest main
git checkout main
git pull upstream main
git checkout your-branch
git rebase main

# Push your changes
git push origin your-branch
```

## 🧪 Testing Guidelines

### Manual Testing
- Test all CRUD operations
- Verify responsive design on different screen sizes
- Check error handling and edge cases
- Ensure proper validation messages

### Frontend Testing Checklist
- [ ] UI components render correctly
- [ ] Forms submit and validate properly
- [ ] Navigation works as expected
- [ ] Responsive design works on mobile/tablet
- [ ] Error messages display correctly

### Backend Testing Checklist
- [ ] All API endpoints work correctly
- [ ] Proper error handling for invalid requests
- [ ] Database operations complete successfully
- [ ] Rate limiting functions as expected
- [ ] Environment variables load correctly

### API Testing
You can test API endpoints using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Browser developer tools

## 📋 Project-Specific Guidelines

### Frontend (React)
- Use functional components with hooks
- Implement proper error boundaries
- Use React Router for navigation
- Follow Tailwind CSS utility classes
- Use React Hot Toast for notifications

### Backend (Express/MongoDB)
- Follow RESTful API conventions
- Implement proper error handling middleware
- Use Mongoose for database operations
- Validate input data server-side
- Follow the existing folder structure

### Database (MongoDB)
- Use meaningful collection and field names
- Implement proper indexes for performance
- Follow the existing schema patterns
- Add validation at the schema level

## 🆘 Getting Help

If you need help or have questions:

1. **Check Documentation**: Review README.md and API.md
2. **Search Issues**: Look for similar questions in issues
3. **Ask Questions**: Open a new issue with the `question` label
4. **Join Discussions**: Participate in GitHub Discussions (if available)

## 🎉 Recognition

Contributors are recognized in several ways:
- Listed in the project's contributors
- Mentioned in release notes for significant contributions
- Opportunity to become a maintainer for consistent contributors

## 📄 License

By contributing to SmartNotes, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to SmartNotes! Your efforts help make this project better for everyone. 🚀