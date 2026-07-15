class Book {
    // กำหนด Visibility เป็น private (-)
    private isbn: string;
    private title: string;
    private author: string;
    private price: number;

    constructor(isbn: string, title: string, author: string, price: number) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // สร้าง Getter methods สำหรับดึงข้อมูลไปแสดงผล
    public getIsbn(): string {
        return this.isbn;
    }

    public getTitle(): string {
        return this.title;
    }

    public getPrice(): number {
        return this.price;
    }
}

class Cart {
    private cartId: string;
    private books: Book[];

    constructor(cartId: string) {
        this.cartId = cartId;
        this.books = []; // กำหนดค่าเริ่มต้นเป็น array ว่าง
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getTotalPrice(): number {
        // ใช้ reduce เพื่อคำนวณผลรวมของราคาทั้งหมด
        return this.books.reduce((total, book) => total + book.getPrice(), 0);
    }

    public getInfo(): void {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log(`รหัสตะกร้า: ${this.cartId}`);
        console.log("รายการ:");
        // วนลูปแสดงรายการหนังสือ
        this.books.forEach(book => {
            console.log(`- ${book.getTitle()} (${book.getIsbn()}): ${book.getPrice()} บาท`);
        });
        console.log(`ราคารวม: ${this.getTotalPrice()} บาท`);
    }
}

// === การสร้าง Object และทดสอบผลลัพธ์ (Expected Output) ===

// 1. สร้าง object หนังสือ
const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 450);
const book2 = new Book("978-1234567890", "TypeScript Deep Dive", "Basarat Ali Syed", 320);

// 2. สร้าง object ตะกร้า
const cart = new Cart("C001");

// 3. หยิบหนังสือใส่ตะกร้า
cart.addBook(book1);
cart.addBook(book2);

// 4. แสดงผลข้อมูล
cart.getInfo();