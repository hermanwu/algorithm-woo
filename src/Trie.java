/**

 Implementing a Trie (Prefix Tree)

 Company: microsoft
 */
class TrieNode {
    public char val;
    public boolean isWord;
    public TrieNode[] children;

    public TrieNode() {
        children = new TrieNode[26];
    }

    public TrieNode(char c) {
        this.val = c;
        children = new TrieNode[26];
    }
}

public class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            // When TrieNode of that character does not exist;
            if (cur.children[c - 'a'] == null) {
                cur.children[c - 'a'] = new TrieNode(c);
            }
            // move to the child node
            cur = cur.children[c - 'a'];
        }
        cur.isWord = true;
    }

    public boolean search(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            // When TrieNode of that character does not exist;
            if (cur.children[c - 'a'] == null) {
                return false;
            }
            // move to the child node
            cur = cur.children[c - 'a'];
        }
        return cur.isWord;
    }

    public boolean startsWith(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            // When TrieNode of that character does not exist;
            if (cur.children[c - 'a'] == null) {
                return false;
            }

            // move to the child node
            cur = cur.children[c - 'a'];
        }
        return true;
    }
}