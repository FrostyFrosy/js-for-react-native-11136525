
// Task 3: createUserProfiles function
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Saad", "Jerry", "Juvelyn", "Derrick", "Harmony"];
const modifiedNames = ["saad", "JERRY", "juvelyn", "DERRICK", "harmony"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

