function companyUsers(arr) {
    let companies = new Map();

    for (let line of arr) {
        let [companyName, employeeId] = line.split(' -> ');

        if (!companies.has(companyName)) {
            companies.set(companyName, new Set());
        }

        companies.get(companyName).add(employeeId);
    }

    let sortedCompanies = Array.from(companies.keys()).sort();

    for (let company of sortedCompanies) {
        console.log(company);

        for (let employeeId of companies.get(company)) {
            console.log(`-- ${employeeId}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])