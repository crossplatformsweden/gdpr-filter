A project to filer objects based on following keys ["pass", "code", "ssn", "social", "birth", "fodelse", "födelse", "person", "pnr", "phone", "email"]

Will remove props based on keys.

Before
```javascipt
const obj = {
    a: "1",
    ssn: "2",
    personummer: "3",
    personum: "3",
    nested: {
        code: "",
        b: ""
    }
}
```

After
```javascipt
const after = {
    a: "1",
    nested: {
        b: ""
    }
}
```
