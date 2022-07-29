Перемещение героя
=================

Двумерное перемещение, вид сбоку:

```csharp
using UnityEngine;

public class HeroControlScript : MonoBehaviour
{
	public float movementSpeed = 10;
	public static float horizontal;

	void Update()
	{
		horizontal = Input.GetAxis("Horizontal") * movementSpeed * Time.deltaTime;
		transform.Translate(horizontal, 0, 0);
	}
}
```