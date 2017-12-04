import java.util.List;

public class OodDesignKindle {
    // Abstract class
    interface ReaderFactory {
        File toUTF8(Book book);

        void separatePage(File file);

        void display(File file);
    }

    public class Kindle {
        List<Book> library;
        ReaderFactory factory;

        void uploadBook(File f){

        }

        void downloadBook(Book b) {

        }

        void read(Book b) {

        }

        void remove(Book b) {

        }
    }

    private class Book {
        Format format;

    }

    private class Format {

    }

    private class File {

    }
}
