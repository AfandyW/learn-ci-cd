const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);

it("app should return 200", async () => {
    try {
        const res = await request.get("/");
        expect(res.status).toBe(200);
        expect(res.text).toBe("This App is running properly!");
        console.log(res.text);
    } catch (err) {
        console.log(err);
    }
});
