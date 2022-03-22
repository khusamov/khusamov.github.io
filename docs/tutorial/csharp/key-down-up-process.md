Обработка нажатия клавиш
========================

```csharp
namespace WinForms_Tetris1
{
	public partial class MainForm : Form
	{
		public MainForm()
		{
			InitializeComponent();
		}

		/// <summary>
		/// Данный словарь хранит информацию о том, была ли нажата клавиша.
		/// В качестве ключа выступает номер клавиши, а значение это флаг (была или не была нажата клавиша).
		/// </summary>
		Dictionary<int, bool> _theKeyWasDown = new();

		private void MainForm_KeyDown(object sender, KeyEventArgs e)
		{
			e.Handled = true;

			// Из события извлекаем номер нажатой клавиши.
			int keyCode = e.KeyValue;

			if (!_theKeyWasDown.ContainsKey(keyCode))
			{
				// Если такой клавиши нет в словаре,
				// то добавляем ее с информацией, что ранее она еще не была нажата,
				_theKeyWasDown.Add(keyCode, false);
			}

			// Если клавиша ранее не была нажата, то:
			if (!_theKeyWasDown[keyCode])
			{
				// Помечаем что она нажата.
				_theKeyWasDown[keyCode] = true;
				// И выполняем действие при нажатии на эту клавишу.
				listBox1.Items.Add("KeyDown " + keyCode);
			}
		}

		private void MainForm_KeyUp(object sender, KeyEventArgs e)
		{
			e.Handled = true;
			// Из события извлекаем номер нажатой клавиши.
			int keyCode = e.KeyValue;
			// Помечаем что она уже не нажата.
			_theKeyWasDown[keyCode] = false;
			// Выполняем действие при отжатии клавиши.
			listBox1.Items.Add("KeyUp " + e.KeyValue);
		}
	}
}
```
