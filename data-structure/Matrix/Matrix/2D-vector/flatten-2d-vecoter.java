class Vector2D {

    int[][] v;
    int i = 0, j = 0;
    public Vector2D(int[][] v) {
        this.v = v;
    }
    
    public int next() {
        if (hasNext()) return v[i][j++];
        else return -1;
    }
    
    public boolean hasNext() {
        while(i < v.length && j == v[i].length) {  // Move to next available vector
            i++;
            j = 0;
        }
        return i < v.length;
    }
}