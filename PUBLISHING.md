# Publishing to npm

This guide explains how to publish Weaver packages to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm Login**: Run `npm login` and authenticate
3. **2FA**: Enable two-factor authentication for security

## Publishing Workflow

### Option 1: Manual Publishing (Recommended for First Release)

```bash
# 1. Ensure you're logged in
npm whoami

# 2. Build all packages
pnpm build

# 3. Test packages
pnpm test

# 4. Publish all packages
pnpm publish -r --access public

# Or publish individual packages
cd packages/core
npm publish --access public
```

### Option 2: Automated Publishing (GitHub Actions)

The repository includes automated publishing via GitHub Actions.

#### Setup

1. **Create npm Access Token**
   - Go to npmjs.com → Access Tokens → Generate New Token
   - Choose "Automation" type
   - Copy the token

2. **Add Token to GitHub**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token

3. **Publish a Release**
   ```bash
   # Update version in all packages
   pnpm changeset version
   
   # Commit changes
   git add .
   git commit -m "chore: release v0.1.0"
   
   # Create and push tag
   git tag v0.1.0
   git push origin main
   git push --tags
   ```

The GitHub Action will automatically:
- Run tests
- Build packages
- Publish to npm
- Create GitHub release

## Version Management

We use [Changesets](https://github.com/changesets/changesets) for version management.

```bash
# Install changesets CLI
pnpm add -D @changesets/cli

# Initialize changesets
pnpm changeset init

# Create a changeset
pnpm changeset

# Version packages
pnpm changeset version

# Publish
pnpm changeset publish
```

## Package Versions

All packages follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes, backward compatible

## Pre-release Checklist

Before publishing:

- [ ] All tests pass (`pnpm test`)
- [ ] All packages build successfully (`pnpm build`)
- [ ] Documentation is up to date
- [ ] CHANGELOG.md is updated
- [ ] Version numbers are correct
- [ ] README files exist in all packages

## Troubleshooting

### "You do not have permission to publish"

Make sure you're logged in and have access to the `@weaver` scope:

```bash
npm login
npm whoami
```

### "Package already exists"

The version already exists on npm. Bump the version:

```bash
# In each package
npm version patch  # or minor, or major
```

### "workspace:* dependencies"

When publishing, pnpm automatically converts `workspace:*` to the actual version numbers.

## Post-Publishing

After publishing:

1. Verify packages on npmjs.com
2. Test installation: `npm install @weaver/email-core`
3. Update documentation site
4. Announce on social media
5. Create GitHub release with changelog
