import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Hello {
    public static void main(String[] args) {
        List<String> array = new ArrayList<>();
        array.add("눈사람");
        array.add("얼음");
        array.add("눈");
        array.add("사람");

        for (String s : array) {
            System.out.println("<li>" + s + "</li>");
        }

        array.stream().map(s -> "<li>" + s + "<li>").collect(Collectors.toList());

        List<Integer> array2 = new ArrayList<>();
        array2.add(1);
        array2.add(2);
        array2.add(3);
        array2.add(4);
        array2.add(5);
        array2.add(6);

        List<Integer> newArray3 = array2.stream().filter(v->v%2==0).toList();

    }
}
