<h1>Practices I Developed During React Learning</h1>
<ul>
 <li><a href="https://github.com/kasim444/MyStudiesAboutReact/tree/master/Counter" target="_blank">Counter</a></li>
 <li><a href="https://github.com/kasim444/MyStudiesAboutReact/tree/master/PhoneBook/my-app" target="_blank">Phone Book</a></li>
</ul>

<h2>Notes to myself</h2>
  1- Eğer react içerisinde event'larla bir işlem yapıyorsak(onChange, onSubmit) bunu bind(this) ya da arrow function metodu ile yapmalıyız. Aksi taktirde bu işlem gerçekleşmeyecektir.
  2- Eğer form submit özelliğini kullanıyorsak ilk olarak event.prevenDefault metodunu çalıştırmamız gerekliki ekran tekrardan post olmasın ve veriler kayıp olmasın.
  3- Render'da state'lere müdehale etmek performansı düşürür. eğer bir setState uygulamamız gerekli ise bunu render metodunun hemen üstünde yapmamız daha iyi olacaktır.
  5- Lifecycle sırası ile;

<ol>
  <li>Constructor</li>
  <li>Component WillMount</li>
  <li>Render</li>
  <li>Child Cunstructor</li>
  <li>Child WillMount</li>
  <li>Child Render</li>
  <li>Child DidMount</li>
  <li>Component DidMount</li>
</ol>
    -constructor(component oluşturulurken çalışan ilk metottur.)
    -componentWillMount(sanal domdan, gerçek doma aktarılmadan hemen önce çalışır.page       analitic gibi işlemlerde)
    -render
    -componentDidMount(render işlemi gerçekleştikten sonra çalışır. örnek olarak ise         componenta gereken servis çağrıları çağrılır.)
    -shouldComponentUpdate(Eğer statete bir değişiklik olduğunda tekrardan render edilip edilmesini istemediğimiz zamanlarda bu fonk. kullanabiliriz.)
  4- React'ta lifecycle render haricinde hepsi bir kere çalışır.
<h4>Subjects I Should Research</h4>
<ul>
  <li>Context Binding in Javascript with Closure</li>
  <li>Wrapper function</li>
  <li>Closures</li>
  <li>.filter method</li>
  <li>.map method</li>
  <li>.indexOf method</li>
</ul>