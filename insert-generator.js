var schema = [
    {
        name: "ID",
        type: "RAW(16)"
    },
    {
        name: "NAME",
        type: "VARCHAR2(300)"
    },
    {
        name: "DESCRIPTION",
        type: "VARCHAR2(300)"
    },
    {
        name: "ALIAS",
        type: "VARCHAR2(300)"
    },
    {
        name: "TELEPHONE",
        type: "VARCHAR2(40)"
    },
    {
        name: "ADDRESS",
        type: "VARCHAR2(300)"
    },
    {
        name: "UPDATED_BY",
        type: "RAW(16)"
    },
    {
        name: "UPDATED_AT",
        type: "DATE"
    },
    {
        name: "VERSION",
        type: "NUMBER(19, 0)"
    }
];

function createInsertScript(tableName, schema, numOfCopies) {
    return [...Array(numOfCopies)].map(_ => `INSERT INTO ${tableName} (
    \t${schema.map(item => item.name).join(",\n\t")}
) VALUES (
    \t${schema.map(item => {
        if (item.name == "VERSION") { return "0"; } 
        else if (item.name == "TELEPHONE") { return randomString(8, true); } 
        else if (item.type == "RAW(16)") { return "sys_guid()"; } 
        else if (item.type.indexOf("VARCHAR") > -1 ) { 
            var lengthLimit = item.type.match(/[^\(]+\((\d+)\)/)[1];
            return `'${`${item.name.toLowerCase()}_${randomString(lengthLimit, true)}`.substring(0, lengthLimit)}'`; 
        } 
        else if (item.type == "DATE") { return "sysdate"; } 
        else {
            var regexMatchGroup = item.type.match(/[^\(]+\((\d+)[^\d]*(\d+)?\)/);
            if (regexMatchGroup.length == 3) {
                var value = randomString(Number(regexMatchGroup[1]), true);
                if (!regexMatchGroup[2] || regexMatchGroup[2]== 0) {
                    return value;
                } else {
                    return insertString(value, ".", regexMatchGroup[1] - regexMatchGroup[2]);
                }
            } else {
                return `123`;
            }
        }
    }).join(",\n\t")}
);`);
}

createInsertScript("department", schema, 10).forEach(item => console.log(`${item}\n`));

function insertString(orignal, insertString, startingAt) {
    return orignal.slice(0, startingAt) + insertString + orignal.slice(startingAt)
} 

function randomString(length, numberOnly) {
    var random = function (minInclusive, maxExclusive) {
        return Math.random() * (maxExclusive - minInclusive) + minInclusive;
    }

    var randomNumberAsciiCode = function() {
        return random(48, 58);
    }

    var randomUpperAlphaAsciiCode = function() {
        return random(65, 91);
    }
    
    var arr = new Array(length);
    for (var i = 0; i < length; i++) {
        arr[i] =  String.fromCharCode(numberOnly ? randomNumberAsciiCode() : randomUpperAlphaAsciiCode());
    }
    return arr.join("");
}