<div style="text-align:center;">
    <h1>TSSG Syntax Parser</h1>
    <p>Parser that generates AST for given TSSG Syntax</p>
    <a href="#">
		<img src="https://img.shields.io/badge/Current Version-Beta V0.0.1-yellow" alt="Current Version">
	</a>
	<a href="#">
        <img src="https://img.shields.io/badge/Documentation-In Progress-Blue" alt="Current Version">
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/PRs-Welcome-Green" alt="Current Version">
    </a>
</div>

---

This is the complete rewrite of the TSSG Parser, which is now able to build the AST for TSSG Syntax V0.0.1.

> Please note that this project is work-in-progress and will support other advance features soon.

##### Added Support

Parser supports following expressoins:

- Schemas Block Expression
  - Schema Expression
  - Extendable Schema Expression
- Request Bodies Block Expression
  - RequestBody Expression
  - Extendable RequestBody Expression
- Parameters Block Expression
  - Parameter Expression

Parser support following data types:

- Literal
- Identifier
- Boolean
- Object
- Array
- Function Calls

> Note: Complex data types like `Array` of `String`, `Array` of `Object` is also supported.

Parser also supports miscellaneous features:

- Whitespaces
- Multiline Comments

#### Schema Block Expression

Schemas block can be written as follow:

```
Schemas {

    BaseUser {
        name: string,
        email: string
    }

    Employee extends BaseUser {
        salary: number,
        department: string
    }

}
```

> Notice how we can `extend` schemas.

#### RequestBodies Block Expression

RequestBodies block can be written as `Schemas` block:

```
RequestBodies {

    BaseListParams {
        page: number,
        limit: number,
        totalPages: number
    }

    ListUsers extends BaseListParams {
        filters: {
            ids: [string]
        }
    }

}
```

#### Parameters Block Expression

Similarly parameters block can be written as:

```
Parameters {

    GetUser {
        id: string
    }

}
```

### Data Types

Data types can be used as follow:

```
    User {
        name: string,
        age: integer,
        address: {
            city: string,
            country: string,
            zip: number
        },
        isVerified: boolean,
        profileImages: [{
            size: {
                width: number,
                height: number
            }
            url: string
        }]
    }
```

> Notice `address` which is an `Object` with 3 properties. And `profileImages` which is an `Array` of `Objects` with 2 properties.
