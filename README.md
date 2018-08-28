<h1>Practices I Developed During React Learning</h1>
<ul>
 <li><a href="https://github.com/kasim444/MyStudiesAboutReact/tree/master/Counter">Counter</a></li>
 <li><a href="https://github.com/kasim444/MyStudiesAboutReact/tree/master/PhoneBook/my-app">Phone Book</a></li>
 <li><a href="https://github.com/kasim444/MyStudiesAboutReact/tree/master/AmountApple/my-app">Calculating Apple price</a></li>
</ul>

<h2>Notes to myself</h2>
<ul>
  <li>Eğer react içerisinde event'larla bir işlem yapıyorsak(onChange, onSubmit) bunu bind(this) ya da arrow function metodu ile yapmalıyız. Aksi taktirde bu işlem gerçekleşmeyecektir.</li>
  <li>Eğer form submit özelliğini kullanıyorsak ilk olarak event.prevenDefault metodunu çalıştırmamız gerekliki ekran tekrardan post olmasın ve veriler kayıp olmasın.</li>
  <li>Render'da state'lere müdehale etmek performansı düşürür. eğer bir setState uygulamamız gerekli ise bunu render metodunun hemen üstünde yapmamız daha iyi olacaktır.</li>
  <li>React'ta lifecycle render haricinde hepsi bir kere çalışır.</li>
  <li>Lifecycle sırası ile;
  <ol>
  <li>Constructor</li>
  <li>Component WillMount</li>
  <li>Render</li>
  <li>Child Cunstructor</li>
  <li>Child WillMount</li>
  <li>Child Render</li>
  <li>Child DidMount</li>
  <li>Component DidMount</li>
</ol><p>
<ol>
  <li><b>constructor</b>(component oluşturulurken çalışan ilk metottur.)</li>
  <li><b>componentWillMount(sanal domdan, gerçek doma aktarılmadan hemen önce çalışır.page analitic gibi işlemlerde)</li>
  <li><b>render</b></li>
  <li><b>componentDidMount</b>(render işlemi gerçekleştikten sonra çalışır. örnek olarak ise componenta gereken servis çağrıları çağrılır.)</li>
  <li><b>shouldComponentUpdate</b>(Eğer statete bir değişiklik olduğunda tekrardan render edilip edilmesini istemediğimiz zamanlarda bu fonk. kullanabiliriz.)</li>
</ol></p>
  </li>
</ul>

<h2>Subjects I Should Research</h2>
<ul>
  <li>Context Binding in Javascript with Closure</li>
  <li>Wrapper function</li>
  <li>Closures</li>
  <li>.filter method</li>
  <li>.map method</li>
  <li>.indexOf method</li>
  <li>self invoking function</li>
</ul>