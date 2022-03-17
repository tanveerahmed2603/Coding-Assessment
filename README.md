# Strategy

- Isolate test data in feature files. If any changes needed to test data, tester should control it from feature file
- Tests can intake dynamic amount of items to test with. 
- Leveraged locator strategy based on application. Made it more modular.
- Added a test data helper to store my test data, so I can use it in other test steps
- Tried my best to compact step definitions
- Using async methods to wait for steps to complete and few pauses to wait for page load

### Checklist of what was done

- [x] Workflow
- [x] Test Runs Completely
- [x] Locator Strategy comments
- [x] Waiting Strategy comments
- [x] Error Handling: Leveraging Chai/Wdio assertions which don't require much additional logging. Could add more but will be more time-consuming.
- [x] Code Structure: Modular
- [x] Utilize WebDriver IO
- [x] Utilize Cucumber
- [ ] Utilize a linter: time constraints
- [ ] Run Tests in paralel: time constraints
- [x] Run Tests with both Head and Headless
- [X] Create Docker image to run tests in. NOTE: this needs a lot of work. There is no base image provided from WDIO that has all the dependencies needed. 
- [ ] Setup pipeline using gitlab to run tests. NOTEL: Time constraint. Couldn't find a pre-built image supporting chrome, chromedriver, npm, node, etc.

# Build and Execute

### Prerequisites
- Node v14 
- NPM v6
- I have the above, but it may work with previous versions

### Build
- `npm i`
### Execute
- `npm run test`
- `npm run test:headless`
