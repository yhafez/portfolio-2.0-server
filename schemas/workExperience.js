export default {
    name: "workExperience",
    title: "Work Experience",
    type: "document",
    fields: [
        { name: "order", title: "Order", type: "number" },
        { name: "name", title: "Name", type: "string" },
        {
            name: "company",
            title: "Company",
            type: "string",
        },
        {
            name: "desc",
            title: "Desc",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
