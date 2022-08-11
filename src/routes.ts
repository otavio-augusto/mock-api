import { UserController } from "./controller/UserController"
import { ThemeController } from "./controller/ThemeController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "put",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "modify"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/themes/:id",
    controller: ThemeController,
    action: "one"
}, {
    method: "post",
    route: "/themes/",
    controller: ThemeController,
    action: "save"
}, {
    method: "delete",
    route: "/themes/:id",
    controller: ThemeController,
    action: "remove"
}]
