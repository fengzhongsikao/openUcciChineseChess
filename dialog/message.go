package dialog
import (
	"context"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)


func OnDomReady(ctx context.Context) {
	runtime.EventsOn(ctx, "MessageDialogJs", func(optionalData ...interface{}) {
		runtime.MessageDialog(ctx, runtime.MessageDialogOptions{
			Type:          runtime.InfoDialog,
			Title:         "信息",
			Message:       "这是一个测试窗口",
			Buttons:       []string{"确定", "取消"},
			DefaultButton: "确定",
			CancelButton:  "取消",
		})

	})
}
