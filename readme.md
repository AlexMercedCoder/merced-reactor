# merced-reactor

This is a command-line tool for generating react projects that use the parcel builder.

There are two templates (js => javascript template and ts => typescript template)

# how it works

run command to generate project folder

```
npx merced-reactor <projectName> <template>
```

for example

```
npx merced-reactor myProject ts
```

after it completes cd into the project folder

run "npm install"

run "npm run dev" to go into development

run "npm run build" to generate deployable build

NOTE: THE TYPESCRIPT TEMPLATE REQUIRES PARCEL TO BE GLOBALLY INSTALLED

```
npm i -g parcel
```
